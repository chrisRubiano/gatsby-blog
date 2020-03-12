import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Cristian Samaniego"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./programmer.svg" alt="Icon" />
        <h1>
          Hola! {" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Bienvenidos a mi página</p>
        <p>
          Aquí debe de ir una descripción bien chila sobre quién soy y lo que hago.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Ir al blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
