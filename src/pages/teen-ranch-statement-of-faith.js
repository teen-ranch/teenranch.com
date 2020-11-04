import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'

// import { Link } from '@reach/router'

import './mel-stevens.scss'

// import Video from 'components/Video'
// import ExternalLink from 'components/ExternalLink'
import { graphql } from 'gatsby'

export default ({ data }) => {

	return (
        <>
            <Heading
                src={ data.file.childImageSharp.fluid }
                alt='Open Bible'
				title='Statement of Faith'
                subtitle='"to love Christ and radiate His love"'
                keywords='teen ranch statement of faith, what does teen ranch believe, what is teen ranch'
			/>
            <Container type='body' constrain={false}>
                <div style={{ maxWidth: '680px', margin: '0 auto', fontSize: '18px', color: 'rgb(41, 41, 41)', letterSpacing: '0.01em', lineHeight: '26px', padding: '0 2rem' }}>

                    <h3>Statement of Faith</h3>

                    <p>
                        We believe in One Eternal God existing as the Father, Son, and Holy Spirit, who governs all things
                        according to His will.
                    </p>
                    <p>    
                        We acknowledge the Creator God as our Heavenly Father, infinitely perfect and intimately
                        acquainted with all our ways.
                    </p>
                    <p>
                        We claim Jesus Christ as our Lord. We affirm that He is God who came in human flesh.
                    </p>
                    <p>
                        We recognize the Holy Spirit as the third member of the Godhead, who works convicting of sin,
                        bringing about faith in Christ, teaching and comforting.
                    </p>
                    <p>
                        We affirm our confidence in God’s inspired Word, the Bible, without error in the original
                        documents. We treasure its truths and we respect it as the supreme and final authority regarding
                        faith and conduct.
                    </p>
                    <p>
                        We confess Adam’s fall into sin, resulting in physical and spiritual death (eternal separation from
                        God). All human beings are born with a sinful nature and have no hope of eternal life with God in
                        Heaven, apart from the new birth made possible by the Savior Jesus Christ’s death and bodily
                        resurrection. We believe that God, in His great love, offers salvation from sin, its power and
                        resulting death, to all. Those who accept it by faith, apart from works, become new creations in
                        Christ.
                    </p>
                    <p>
                        We anticipate the Lord’s promised return, which could occur at any moment. We are convinced
                        that all who have died will be brought back from beyond for judgment – believers to everlasting
                        communion with God and unbelievers to everlasting separation from God.
                    </p>
                    <p>
                        We are to be part of Christ’s Body, the Church, composed of all true believers, which exists to
                        proclaim God’s truth, to stimulate growth to maturity and to worship God.
                    </p>

                    <p>
                        <i>
                            <strong>“By this will all know that you are my disciples if you have love for one another.” John 13:35</strong>
                        </i>
                    </p>

                </div>

            </Container>
        </>
    )
}

export const query = graphql`
    query {
        file(relativePath: { eq: "stock/aaron-burden-9zsHNt5OpqE-unsplash.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }
    }
`