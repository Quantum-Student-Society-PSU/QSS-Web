'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Container } from '@/components/atoms/Container'
import { H2, P } from '@/components/atoms/Typography'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="py-16 bg-primary-bg border-2 border-red-500/20 rounded-2xl">
          <Container>
            <div className="text-center">
              <H2 className="mb-4 text-red-400">Something went wrong</H2>
              <P className="text-text-secondary mb-6">
                We apologize for the inconvenience. Please try refreshing the page.
              </P>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-accent hover:bg-accent-light text-primary-bg font-medium rounded-full transition-colors duration-200"
              >
                Refresh Page
              </button>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-8 text-left">
                  <summary className="cursor-pointer text-accent mb-4">Error Details (Dev Mode)</summary>
                  <pre className="bg-primary-dark/50 p-4 rounded-lg text-sm text-red-300 overflow-auto">
                    {this.state.error.message}
                    {'\n\n'}
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
            </div>
          </Container>
        </div>
      )
    }

    return this.props.children
  }
}

// HOC for wrapping components with error boundary
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary fallback={fallback}>
      <Component {...props} />
    </ErrorBoundary>
  )

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`
  
  return WrappedComponent
}