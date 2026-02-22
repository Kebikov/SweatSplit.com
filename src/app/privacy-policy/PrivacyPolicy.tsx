import style from './PrivacyPolicy.module.css';


const Title = ({children}: {children: React.ReactNode}) => (
    <div className={style.subtitle} >{children}</div>
)

const Text = ({children}: {children: React.ReactNode}) => (
    <div className={style.text} >{children}</div>
)


/** `//*[page] с Privacy Policy` */
const PrivacyPolicy = () => {

    return (
        <div className={style.container} >
            <div className={style.content} >
                <p className={style.title} >Privacy Policy</p>
                <Text>Last updated: February 2026</Text>
                <Text>SweatSplit (“we”, “our”, or “the app”) respects your privacy.</Text>
                <Title>Information We Collect</Title>
                <Text>We may collect the following data:</Text>
                <ul className={style.ul} >
                    <li>App usage data (for analytics and app improvement)</li>
                    <li>Purchase and subscription status (handled via Apple App Store)</li>
                    <li>Device identifiers (for analytics and crash reporting)</li>
                    <li>We do not collect personal data such as name, address, or contacts.</li>
                </ul>
                
                <Title>Purchases</Title>
                <Text>All payments and subscriptions are processed by Apple through the App Store.</Text>
                <Text>We do not store or process payment information.</Text>
                
                <Title>Data Storage</Title>
                <Text>{`User data may be stored locally on the device and/or securely backed up using Apple services (iCloud), depending on enabled features.`}</Text>
                
                <Title>Third-Party Services</Title>
                <Text>We may use third-party services such as:</Text>
                <ul className={style.ul} >
                    <li>Apple App Store</li>
                    <li>RevenueCat (for subscription management)</li>
                    <li>Analytics and crash reporting tools</li>
                    <li>These services process data according to their own privacy policies.</li>
                </ul>

                <Title>Data Security</Title>
                <Text>We take reasonable measures to protect your data and prevent unauthorized access.</Text>

                <Title>Children’s Privacy</Title>
                <Text>The app is not intended for children under 13 years of age.</Text>

                <Title>Changes</Title>
                <Text>This Privacy Policy may be updated from time to time.</Text>

                <Title>Analytics and Usage Data</Title>
                <Text>We use Firebase Analytics, a service provided by Google LLC, to collect and analyze information about how users interact with the application.</Text>

                <Title>What Data We Collect</Title>
                <Text>Firebase Analytics may collect the following types of information:</Text>
                <ul className={style.ul} >
                    <li>Device identifiers (such as a unique device ID or instance ID)</li>
                    <li>App usage data (such as screen views, session duration, feature usage)</li>
                    <li>Interaction events (e.g., onboarding completion, workout start/completion, subscription interactions)</li>
                    <li>General device information (such as device model, operating system version, app version)</li>
                </ul>
                <Text>We do not collect users’ names, email addresses, or other directly identifiable personal information through analytics.</Text>

                <Title>Purpose of Data Collection</Title>
                <Text>The collected data is used solely for:</Text>
                <ul className={style.ul} >
                    <li>Understanding how users interact with the app</li>
                    <li>Improving app functionality and performance</li>
                    <li>Fixing issues and optimizing user experience</li>
                    <li>Measuring feature effectiveness</li>
                </ul>
                <Text>We do not use analytics data for advertising purposes and we do not sell personal data.</Text>

                <Title>Third-Party Processing</Title>
                <Text>Analytics data is processed by Google LLC through Firebase Analytics. Google may process this data in accordance with its own privacy policy:</Text>
                <Text>https://policies.google.com/privacy</Text>

                <Title>Data Linking and Tracking</Title>
                <Text>We do not use analytics data to track users across third-party apps or websites. The collected data is not used for cross-app tracking or targeted advertising.</Text>

                <Title>Contact</Title>
                <Text>If you have questions, contact us at:</Text>
                <Text>kebikovroma@gmail.com</Text>
            </div>
        </div>
    )
}


export default PrivacyPolicy;