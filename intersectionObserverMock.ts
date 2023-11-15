class IntersectionObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  
  (global as any).IntersectionObserver = IntersectionObserverMock;