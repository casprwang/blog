import React from "react"

if (typeof window !== "undefined") {
  window.postsToShow = 12
}

class Float extends React.Component {
  constructor() {
    super()
    let postsToShow = 12
    if (typeof window !== "undefined") {
      postsToShow = window.postsToShow
    }

    this.state = {
      showingMore: postsToShow > 12,
      postsToShow,
    }
  }

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    if (this.state.showingMore && distanceToBottom < 100) {
      this.setState({ postsToShow: this.postsToShow + 12 })
    }
    this.ticking = false
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => this.update())
    }
  }
}
