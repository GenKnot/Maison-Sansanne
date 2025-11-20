import Image from "next/image";

export default function ContactInfo() {
    return (
        <div className="contact-text-block__wrapper">
            <div className="contact-text-block">
                <div className="contact-content__heading ">
                    <span className="subtitle">GET IN TOUCH</span>
                    <h2 className="content-title heading-md">
                        让我们一起探讨您的空间设计
                    </h2>
                </div>
            </div>
            <div className="contact-widgets-02">
                <div className="contact-widget-02">
                    <div className="contact-widget-02__icon">
                        <Image
                            height={22}
                            width={22}
                            src="/image/common/location.svg"
                            alt="icon"
                        />
                    </div>
                    <span className="contact-widget-02__text">
                        33STUDIO<br />
                        Montreal, QC, Canada
                    </span>
                </div>
                <div className="contact-widget-02">
                    <div className="contact-widget-02__icon">
                        <Image
                            height={22}
                            width={22}
                            src="/image/common/mail.svg"
                            alt="icon"
                        />
                    </div>
                    <span className="contact-widget-02__text">
                        info@33studio.com
                    </span>
                </div>
            </div>
        </div>
    );
}
