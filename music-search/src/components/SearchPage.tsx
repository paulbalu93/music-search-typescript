import React, { Component } from 'react';
import { Container, Row, Col, Form, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SearchPage extends Component {
    state = {
        description: "",
        location: "",
        results: []
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = async e => {
        e.preventDefault()
        const { music} = this.state
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${music}`)
        const results = await response.json()

        this.setState({ results })
    }
    render() {
        return (
            <Container>
            <Row className="mt-5">
                <Col xs={12} md={8} className="mx-auto">
                    <h1>Search Music</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <div className="d-flex my-3">
                            
                            <Form.Control name="music" type="search" placeholder="Location" onChange={this.handleChange} />
                        </div>
                        <Form.Control type="submit" value="Submit" />
                    </Form>
                    {this.state.results.map(result => <Col xs={12} className="d-flex">
                        <Col xs={2}>
                            <Image fluid className="result-img" src={result.data.artist.picture_small} />
                        </Col>
                        <Col xs={10} className="ps-2">
                            <h6 className="mt-3">{result.data.title}</h6>
                            <Link to={`/${result.data.id}`} className="btn btn-primary">Show more</Link>
                        </Col>
                    </Col>
                    )}
                </Col>
            </Row>
        </Container>
        );
    }
}

export default SearchPage;