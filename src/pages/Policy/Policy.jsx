import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import './Policy.scss'


const Policy = () => {
    return (
        <Layout title={'Policy - Ecommerce'}>
            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignContent: 'center', justifyContent: 'center' }}>
                <Typography variant='h3'>
                    Our Policies
                </Typography>
                <Typography sx={{ textAlign: 'justify', mx: 4, p: 5 }} variant='h6'>
                    <ul className='list'>
                        <li>
                            <Typography sx={{fontWeight:'600'}} variant='h5'>
                                Privacy Policy:
                            </Typography>
                            <Typography>
                                Description: This policy outlines how customer information is collected, used, and protected. It includes details on data collection methods, storage practices, and measures taken to ensure customer data security. Additionally, it explains how customer information may be shared with third parties, if applicable.
                            </Typography>
                        </li>
                        <li>
                            <Typography sx={{fontWeight:'600'}} variant='h5'>
                            Terms and Conditions:
                            </Typography>
                            <Typography>
                            Description: The terms and conditions specify the rules and guidelines for using the ecommerce site. It covers product descriptions, pricing, payment terms, shipping and delivery information, return and refund policies, and any disclaimers or limitations of liability.
                            </Typography>
                        </li>
                        <li>
                            <Typography sx={{fontWeight:'600'}} variant='h5'>
                            Intellectual Property Rights:
                            </Typography>
                            <Typography>
                            Description: This policy explains how the ecommerce site protects intellectual property rights, such as copyrights and trademarks. It outlines the restrictions on copying or distributing site content and user-generated content. It may also include guidelines for users regarding the submission of original content.
                            </Typography>
                        </li>
                        <li>
                            <Typography sx={{fontWeight:'600'}} variant='h5'>
                            Account Registration and Security:
                            </Typography>
                            <Typography>
                            Description: This policy describes the process of creating user accounts, including any age restrictions or parental consent requirements. It also outlines the responsibility of users to maintain the security of their account information, including passwords and login credentials.
                            </Typography>
                        </li>
                        <li>
                            <Typography sx={{fontWeight:'600'}} variant='h5'>
                            Content Submission and Moderation:
                            </Typography>
                            <Typography>
                            Description: This policy covers user-generated content, such as reviews, comments, and product submissions. It outlines the guidelines for acceptable content and the consequences of violating the guidelines. It may also detail the moderation process and the actions taken for inappropriate or harmful content.
                            </Typography>
                        </li>
                        <li>
                            <Typography sx={{fontWeight:'600'}} variant='h5'>
                            Data Security and Protection:
                            </Typography>
                            <Typography>
                            Description: This policy explains the measures taken by the ecommerce site to protect customer data, such as encryption protocols, secure payment gateways, and regular security audits. It also addresses compliance with data protection regulations, such as the General Data Protection Regulation (GDPR) if applicable.
                            </Typography>
                        </li>
                        <li>
                            <Typography sx={{fontWeight:'600'}} variant='h5'>
                            Compliance with Laws and Regulations:
                            </Typography>
                            <Typography>
                            Description: This policy ensures that the ecommerce site operates in compliance with relevant laws and regulations, including consumer protection laws, privacy laws, and any industry-specific regulations. It may also include information about legal jurisdictions and dispute resolution processes.
                            </Typography>
                        </li>
                        <li>
                            <Typography sx={{fontWeight:'600'}} variant='h5'>
                            Data Security and Protection:
                            </Typography>
                            <Typography>
                            Description: This policy explains the measures taken by the ecommerce site to protect customer data, such as encryption protocols, secure payment gateways, and regular security audits. It also addresses compliance with data protection regulations, such as the General Data Protection Regulation (GDPR) if applicable.
                            </Typography>
                        </li>
                    </ul>
                </Typography>
            </Box>
        </Layout>
    )
}

export default Policy