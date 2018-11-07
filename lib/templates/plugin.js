/**
 * @class Li
 */
class Li {
  constructor (options) {
    this.options = options
  }

  /**
   * @method enable
   */
  enable () {
    if (typeof window !== 'undefined') {
      window._linkedin_partner_id = this.options.partnerId;
      window._nuxt_linkedin_inject_insight(this.options.partnerId);
    }
  }
}

export default (ctx, inject) => {

  /* eslint-disable */
  if (typeof window !== 'undefined') {
    window._nuxt_linkedin_inject_insight = function (linkedin_partner_id) {
        window._linkedin_partner_id = linkedin_partner_id;
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(window._linkedin_partner_id);
        (function(){var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})();
      }

      <% if (!options.disabled) { %>
      window._nuxt_linkedin_inject_insight('<%= options.partnerId %>');
    <% } %>
  }

  const instance = new Li(<%= JSON.stringify(options) %>);
  /* eslint-enable */
  ctx.$li = instance
  inject('li', instance)
}
