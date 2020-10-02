import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'

import { Link } from '@reach/router'

import './mel-stevens.scss'

import Video from 'components/Video'

export default () => {

	return (
        <>
            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/Mel.jpg'
                alt='Melville Charles Stevens'
				title='Melville Charles Stevens'
                subtitle='March 12th, 1936 - August 8th, 2020'
                metaDescription='Mel Stevens, founder and long-time director of Teen Ranch, has gone home to be with the LORD. Mel was promoted to glory at Headwaters Health Care Centre on August 8, 2020.'
                keywords='mel stevens death, mel stevens, mel stevens died'
			/>
            <Container type='body' constrain={false}>
                <div style={{ maxWidth: '680px', margin: '0 auto', fontSize: '18px', color: 'rgb(41, 41, 41)', letterSpacing: '0.01em', lineHeight: '26px', padding: '0 2rem' }}>

                    <h3>In loving memory of Mel Stevens</h3>

                    <p>
                        With great thankfulness to God for the life of Mel Stevens. Mel was promoted to glory at Headwaters Health Care Centre on August 8, 2020. He gave his life to the Lord through servant hood in music, sports, and Christian camping. He leaves behind his wife Betty and children Tim(Ann), Michele, Steven(Christine), Lee(Mark), Sheryl, and Corrie(Jim). Mel was a true disciple and example of Jesus’ teachings to his grandchildren Dane(Katie), Matthew, Michael, Janet, Rachel, Abby, Aly(James), Madi, Dustin, Cody, Ella, Katie, Luke, Grace, Elly, and Ty, as well as his great-grandchildren Lochlan and Elowen. Mel will be truly missed by his brother Dave(Darlene) Stevens. Predeceased by his wife Janet, granddaughter Layne, brother Ron and parents Allin and Bernice.
                    </p>

                    <p>
                        As a young man at Word of Life Camp, Mel Stevens gave his life fully to Jesus Christ telling God he would go anywhere, live under any circumstances and do whatever God would have him do. In 1960, as a member of the gospel music group The King’s Men, Mel and his wife Janet packed up their infant child and used their life savings to buy a ticket to Australia to help establish a Christian camp called Teen Ranch. After 6 years as director of Teen Ranch Australia; Mel, Janet, their now 3 children, and only $10 moved back to Canada. Through God’s miraculous provision, they purchased 150 acres just south of Orangeville in Caledon, with an old barn and dilapidated farmhouse to build Teen Ranch Canada. They held their first and full Western Riding camp in 1967 with just 16 campers and soon expanded the program to include English Riding and Hockey. In time, God gave Mel the vision to build an ice arena to host their program and so began the long construction process. Despite many challenges, major setbacks, and financial hardships, Mel was steadfast in his faith that God will provide. Eventually, Teen Ranch opened the Ice Corral, featuring an Olympic sized ice pad. Many NHL, OHL, Jr., and international teams have hosted training camps there along with thousands of kids. Many have heard the gospel and come to know Jesus Christ through sports.
                    </p>

                    <p>
                        Mel continued to play and tour with The King’s Men into the 1970’s, leading him to Indonesia where he felt called to help start Teen Ranch Indonesia to support and reach kids living on the streets of Jakarta. From that first move to Australia, several independent Teen Ranch camps and dozens of other Christian camps all around the world have been established.
                    </p>

                    <p>
                        Abundantly gifted in his ability to foster relationships, lead passionately and follow God fearlessly, Mel was a chaplain for the Toronto Argonauts for 13 years, the Toronto Blue Jays for several years and spent many hours with some players of the Toronto Maple Leafs being a friend to and praying with them. He was known for his gift of leather-bound bibles, embossed with each player’s name, allowing him to build relationships with many professional athletes in hockey, football, baseball, and horseback riding. In the horse world, Mel rodeoed in Australia and Ontario as a tie-down roper and steer wrestler, hosting Cowboy Chapel at the Rodeo on Sunday Morning for many years. Many camp young people attended Bible studies in their cities throughout the school year led by Mel and other Teen Ranch staff.
                    </p>

                    <p>
                        With decades of hard work, faithfulness, and the help of many volunteers, Teen Ranch grew and expanded into the peaceful oasis that is enjoyed by many - a summer sports camp for youth, a retreat center for weekend getaways, and an outdoor education facility for school groups. Mel’s God-given vision has been instrumental in pointing thousands of people to faith in Christ by coming to know Jesus on a personal level. Mel’s unwavering faith and willingness to follow God’s calling through fear, uncertainty, trials, and tribulations have left a legacy of a true and faithful servant.
                    </p>

                    <p>
                    Im memory of Mel, a financial gift to Teen Ranch or Teen Ranch Ministries will be gratefully received. Details can be found at <Link to='/give/'>teenranch.com/give</Link>
                    </p>

                    <div className='liveServiceLink'>

                        <p><i>Thank you Rob, April, Bobbi, Joe and the Fawcett Funeral Home staff for your tremendous generosity of time, effort, and service to help us honor Mel Stevens' life and the God he served, by God's grace, so well.</i></p>

                    </div>

                    <h3>Videos</h3>

                    <Video src='https://www.youtube.com/embed/XU-oqJ5s7UM' />
                    <Video src='https://www.youtube.com/embed/FWyFqFVfNZ0' />
                    <Video src='https://www.youtube.com/embed/ac0bdQzgVe0' />
                    <Video src='https://www.youtube.com/embed/M4T26xw_KHw' />

                    <h3>Articles</h3>

                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="http://caledoncitizen.com/?p=33165">Caledon Citizen: Teen Ranch founder Mel Stevens remembered by friends, family and the local community</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://mailchi.mp/a1bed8a3243b/ccicanada-feb-7862358?e=2b0cf48f76#templateHeader">CCI Canada: Mel Stevens - Servant In a White Stetson</a></li>
                    </ul>

                </div>

            </Container>
        </>
    )
}
