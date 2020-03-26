import React from 'react'
import heroService from '../service/hero'

class Marvel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            apiRet: []
        }
    }

    componentDidMount () {
        this.getHeroes().then(ret => this.setState({ apiRet: ret }))
    }

    async getHeroes () {
        const ret = await heroService()
        console.log(ret)
        return ret;
    }

    hasError = obj => obj instanceof Error

    render = () => (
        <div>
            <h1>API Marvel</h1>
            {this.hasError(this.state.apiRet) ? <h1> Ocorreu um Erro! </h1> : this.state.apiRet.map(hero => <h3>{hero.name}</h3>)}
        </div>
    )
}

export default Marvel