import { Fragment } from "react"
import NextDocument from "next/document"
import { ServerStyleSheet } from "styled-components"

class Document extends NextDocument {

    static async getInitialProps(context) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = context.renderPage

        try {
            context.renderPage = () => {
                return originalRenderPage({
                    enhanceApp: App => {
                        return props => sheet.collectStyles( < App {...props} />)
                    }
                })
            }

            const initialProps = await NextDocument.getInitialProps(context)
            return {
                ...initialProps,
                styles: (
                    <Fragment> 
                        { initialProps.styles } 
                        { sheet.getStyleElement() }
                    </Fragment>
                )
            }
        } finally {
            sheet.seal()
        }
    }

}

export default Document