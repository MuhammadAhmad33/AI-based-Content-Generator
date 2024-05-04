import './Homescreen.css'

export default function HomeScreen() {
    return (
        <div className="home-screen">
            <div className="rectangle-26">
            </div>
            <div className="header">
                <div className="content-craft-ai">
                    ContentCraft.ai
                </div>
                <div className="log-in">
                    Log In
                </div>
                <div className="container-11">
                    <span className="sign-up">
                        Sign Up
                    </span>
                </div>
            </div>
            <div className="container-7">
                <div className="container-10">
                    <div className="container-5">
                        <div className="container-12">
                            <span className="a">
                                A
                            </span>
                        </div>
                        <div className="account">
                            Account
                        </div>
                    </div>
                    <div className="container">
                        <div className="new-chat">
                            New chat
                        </div>
                        <div className="add-to-chat">
                        </div>
                    </div>
                </div>
                <div className="main-heading">
                    <p className="welcome-to-content-craft-ai"><span className='welcome-to- '>Welcome to </span>
                        ContentCraft.ai
                        <span className="welcome-to-content-craft-ai-sub-7"></span>
                    </p>
                    <span className="tailored-for-purpose-perfect-for-engagement">
                        Tailored for Purpose, Perfect for Engagement
                    </span>
                </div>
            </div>
            <div className="container-13">
                <p className="im-your-ai-assistant-here-to-make-creating-engaging-content-for-linked-in-instagram-and-twitter-effortless-just-tell-me-your-purpose-target-audience-and-platform-needs-and-ill-generate-personalized-top-notch-content-for-you-in-no-time">
                    <span> I'm your <span className='orange'> AI assistant</span>, here to make creating <span className='orange'>engaging content</span> for LinkedIn, Instagram, and Twitter effortless. Just tell me your purpose, target audience, and platform needs, and I'll <span className='orange'>generate personalized</span>, top-notch content for you in no time.</span>
                </p>
                <div className="chatbot-1">
                </div>
            </div>
            <div className="container-9">
                <div className="history">
                    History
                </div>
                <div className="all-options">
                    {/* <div className="container-2">
                        <div className="target-audience">
                            Target audience:
                            <select>
                                <option value="">Select</option>
                                <option value="linkedin">LinkedIn</option>
                                <option value="instagram">Instagram</option>
                                <option value="twitter">Twitter</option>
                            </select>
                        </div>
                        <div className="frame-2">
                            <div className="audience-types">
                                Audience types:
                                <select>
                                    <option value="">Select</option>
                                    <option value="professionals">Professionals</option>
                                    <option value="recruiters">Recruiters</option>
                                    <option value="newbies">Newbies</option>
                                    <option value="job-seekers">Job Seekers</option>
                                </select>
                            </div>
                            <div className="expand-arrow-3">
                            </div>
                        </div>
                        <div className="frame-3">
                            <div className="age-group">
                                Age group:
                                <select>
                                    <option value="">Select</option>
                                    <option value="18-24">18-24</option>
                                    <option value="25-34">25-34</option>
                                    <option value="35-44">35-44</option>
                                    <option value="45-54">45-54</option>
                                    <option value="55-64">55-64</option>
                                    <option value="65+">65+</option>
                                </select>
                            </div>
                            <div className="expand-arrow">
                            </div>
                        </div>
                        <div className="frame-4">
                            <div className="interests">
                                Interests:
                                <select>
                                    <option value="">Select</option>
                                    <option value="technology">Technology</option>
                                    <option value="business">Business</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="travel">Travel</option>
                                    <option value="fitness">Fitness</option>
                                    <option value="food">Food</option>
                                </select>
                            </div>
                            <div className="expand-arrow-1">
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="container-4">
                        <span className="hashtags">
                            #Hashtags
                        </span>
                    </div> */}
                    <div className="container-6">
                        <div className="select-platform">
                            Select platform:
                        </div>
                        <div className="container-8">
                            <input type="radio" id="instagram" name="platform" value="instagram" />
                            <label htmlFor="instagram" className="instagram">Instagram</label>
                        </div>
                        <div className="container-14">
                            <input type="radio" id="twitter" name="platform" value="twitter" />
                            <label htmlFor="twitter" className="twitter">Twitter</label>
                        </div>
                        <div className="container-3">
                            <input type="radio" id="linkedin" name="platform" value="linkedin" />
                            <label htmlFor="linkedin" className="linked-in">LinkedIn</label>
                        </div>
                    </div>

                    <div>
                        <textarea
                            className="container-1"
                            rows="5"
                            cols="30"
                            placeholder="Write your purpose & target audience...."
                            maxLength="750"
                            style={{ width: '100%', maxWidth: '750px', height: '185px' }}
                        />
                        <span className="enter"></span>
                    </div>

                </div>
            </div>
            <div className="line-3">
            </div>
        </div>
    )
}