/**
 * 功能控制器
 */
export default class I18NControl {
    /**
     * 单例
     */
    static _inst;

    static getInst() {
        I18NControl._inst = I18NControl._inst || new I18NControl();
        return I18NControl._inst;
    }

    /**
     * 构造
     */
    constructor() {
        this.i18nData = {};
    }

    /**
     * 析构
     */
    destroy() {
        I18NControl._inst = null;
    }

    /**
     * 初始化事件
     */
    init(app) {
        this.app = app;
        //TODO 多语言初始化事件
        let data = this.i18nData;
        let $view = this.app.$view;
        $view.find('.btn_segment_length').text(data['btn_segment_length']);
        $view.find('.btn_segment_ratio').text(data['btn_segment_ratio']);
        $view.find('.btn_add_line').text(data['btn_add_line']);
        $view.find('.btn_delete_line').text(data['btn_delete_line']);
        $view.find('.btn_animate').text(data['btn_animate']);
        $view.find('.btn_pause').text(data['btn_pause']);
        $view.find('.btn_reset').text(data['btn_reset']);
        return this;
    }

}