import React from 'react';

class ErrorBoundaries extends React.Component {
    constructor(props){
        super(props);
        this.state={
            hasError : false,
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError : true,
        }
    }
    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo)
    }
    render() {
        if(this.state.hasError){
            return this.props.render();
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default ErrorBoundaries;
