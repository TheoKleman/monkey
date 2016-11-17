import Page from "../Page";

export default class Home extends Page
{
    constructor($template, $content)
    {
        super($template, $content);

        this._pageTemplate = "home";
    }

    init()
    {
        super.init();

        // Some selectors
        this._$mainTitle = this._$execPHPappContainer.find('#main-title');
        this._$mainTitleLine1 = this._$mainTitle.find('.line1');
        this._$mainTitleLine2 = this._$mainTitle.find('.line2');
        this._$mainCta = this._$execPHPappContainer.find('#main-cta').find('.c-btn');

        // Set tweens
        TweenMax.set(this._$mainTitleLine1, {
            width: 0,
            x: -15,
        })
        TweenMax.set(this._$mainTitleLine2, {
            width: 0,
            x: -20
        })
        TweenMax.set(this._$mainCta, {
            rotation: -3,
            autoAlpha: 0,
            scale: .98
        })
    }

    // Methods
    //-----------------------------------------------------o

    _showAnimations()
    {
        super._showAnimations();

        // Your custom animations
        let timelime = new TimelineMax();

        // Main title
        timelime.add(
            TweenMax.to(this._$mainTitleLine1, .5, {
                x: 0,
                width: "100%",
                ease: Power2.easeInOut
            }),
            "start"
        )
        timelime.add(
            TweenMax.to(this._$mainTitleLine2, .7, {
                x: 0,
                width: "100%",
                ease: Power4.easeOut
            }),
            "start+=0.3"
        )
        timelime.add(
            TweenMax.to(this._$mainCta, .3, {
                rotation: 0,
                autoAlpha: 1,
                scale: 1,
                ease: Power2.easeInOut
            }),
            "start+=0.5"
        )
    }

    _hideAnimations(callback)
    {
        super._hideAnimations(callback);

        // Your custom animations
    }
}
