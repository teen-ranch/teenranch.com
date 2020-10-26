import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
import Program from 'components/Program'
import { graphql, Link } from 'gatsby'

import SubNav from 'components/SubNav'
import Verse from 'components/Verse'

export const frontmatter = {
    title: 'Adventure Bible Program',
    path: '/programs/leadership/adventure-bible-program/'
}

const pageData = {
    subTitle: 'Explore your faith. Challenge your limits.',
    keywords: 'adventure bible program, christian leadership program, teen ranch leadership program'
}

export default function Programs({ data }) {

	return (
        <>

            <Heading
                src={ data.file.childImageSharp.fluid }
                alt='Silhouette of people on a hill'
                title={ frontmatter.title }
                subtitle={ pageData.subTitle }
                metaTitle={ pageData.metaTitle || frontmatter.title }
                metaDescription={ pageData.metaDescription || pageData.subTitle }
                keywords={ pageData.keywords }
			/>

            <SubNav>
                <NavLink to={ frontmatter.path }>Overview</NavLink>
                <NavLink to={ frontmatter.path + 'location/' }>Location</NavLink>
                <NavLink to={ frontmatter.path + 'pricing/' }>Pricing</NavLink>
            </SubNav>

            <Container type='body'>

                <h3>Developing rock-solid faith for real life</h3>  

                <p>
                    This solid, <strong>Christ-centered</strong> experiential program is designed to ground young adults in God's Word and equip them for a vibrant walk with Jesus while challenging them through adventure and outreach.
                </p>    

                <p>
                    This program aims to encourage 17 to 24-year-olds to explore their faith and invest in their walk with the Lord because we know that life will try to undermine and distract them at every turn. The program is an amazing opportunity to use this uncertain time to gain sure footing and make an eternal investment.
                </p>         
                
                <p>
                    The winter session is the debut of an ongoing training program for young adults on-site at Teen Ranch.
                </p>

                <p>
                    Winter, Spring, and Fall options are available for the busy young adult to take a brief time away to solidify their
                    faith or to combine sessions to make the greatest training experience possible during a gap year or break from
                    university or work. These sessions can be taken in any order and will pair with Teen Ranch camp and ministry
                    programs for the avid young person seeking to gain added leadership and ministry experience and invest in young people in-between the offered program sessions or after their time.
                </p>

                <Program
                    name='Growth'
                    src={data.study.childImageSharp.fluid}
                >
                    <p>
                        Program participants will have the opportunity to get grounded in God’s Word through biblical teaching and personal study as well as grow in disciplines of the faith - prayer, worship, and fellowship.
                    </p>
                    <p>
                        Sessions taught will focus on books of the Bible and topical studies applicable to young adult faith. Staff and speakers bring a wealth of experience and expertise in sharing with young adults about matters of faith and real-life application. Participants will have time set apart to practice meeting personally with the Lord through His Word and prayer and will have several assignments to help ingrain the truths being taught, including journal assignments, presentations, and book reports. Program staff oversee each individual’s learning and come alongside with weekly meetings and prayer.
                    </p>

                    <h4>Sample session:</h4>
                    <ul>
                        <li>Week 1 - Principles of the Christian Life</li>
                        <li>Week 2 - Genesis</li>
                        <li>Week 3 - Philippians</li>
                        <li>Week 4 - Relationships</li>
                        <li>Week 5 - Evangelism Today</li>
                        <li>Week 6 - The Exodus: Going Out</li>
                    </ul>

                    <Verse reference='2 Corinthians 11:3' translation='NASB'>
                        But I am afraid that, as the serpent deceived Eve by his craftiness, your minds will be led astray from the simplicity and purity of <strong>devotion to Christ.</strong>
                    </Verse>

                </Program>

                <Program
                    name='Outreach'
                    src={data.outreach.childImageSharp.fluid}
                    swap
                >
                    <p>
                        Outreach is a key component of the program as it challenges and encourages individuals to put their faith into action, both within the Teen Ranch community setting, amidst peers as well as in the local community. Service in the local church, youth groups, community soup kitchen, local food bank, and through Teen Ranch programs will allow growth, interaction, and discovering how sharing one’s faith connects with God’s heart.
                    </p>

                    <Verse reference='Philemon 1:6'>
                        I pray that your partnership with us in the faith may be effective in deepening your understanding of every good thing we share for the sake of Christ.
                    </Verse>

                    <Verse reference='1 Peter 4:11a'>
                    Whoever speaks, is to do so as one who is speaking the utterances of God; whoever serves is to do so as one who is serving by the strength which God supplies;
                    </Verse>

                </Program>

                <Program
                    name='Adventure'
                    src={data.adventure.childImageSharp.fluid}
                >
                    <p>
                        Adventure is a unique part of the program here at Teen Ranch. Intended to introduce individuals to connecting with God through the great outdoors, teach fundamentals of fitness and activity, and challenge participants to exceed their known limits as part of a healthy lifestyle and as a demonstration of the spiritual race we are running! Responsibility and good work ethics will be taught through the adventure aspect.
                    </p>
                    
                    <h4>Activities include:</h4>
                    <ul>
                        <li>Personal physical challenges</li>
                        <li>Hiking and training in outdoor wilderness survival</li>
                        <li>Horse and equestrian basics for beginners and options for advanced riders</li>
                        <li>Hockey and skating fundamentals</li>
                        <li>Indoor climbing</li>
                        <li>Snowshoeing</li>
                        <li>Down-hill skiing*</li>
                        <li>And more!</li>
                    </ul>
                    <i>* available at an additional cost.</i>

                    <Verse reference='Isaiah 40:31'>
                        Those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.
                    </Verse>

                    <Verse reference='1 Corinthians 9:24'>
                        Do you not know that in a race all the runners run, but only one gets the prize? Run in such a way as to get the prize
                    </Verse>

                    <Verse reference='Romans 8:37'>
                        In all these things we are more than conquerors through him who loved us.
                    </Verse>

                </Program>

            </Container>
        </>
    )
}

const NavLink = ({ children, ...props }) => (
    <Link {...props} activeClassName='active'>{ children }</Link>
)

export const query = graphql`
    query {
        file(relativePath: { eq: "stock/chang-duong-Sj0iMtq_Z4w-unsplash.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        study: file(relativePath: { eq: "stock/ben-white-oUiTrFhnEkE-unsplash.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        outreach: file(relativePath: { eq: "stock/helena-lopes-PGnqT0rXWLs-unsplash.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        adventure: file(relativePath: { eq: "stock/joshua-earle-9idqIGrLuTE-unsplash.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }
    }
`