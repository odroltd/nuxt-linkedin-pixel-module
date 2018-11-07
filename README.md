# nuxt-linkedin-pixel-module

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-linkedin-pixel-module/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-linkedin-pixel-module)
[![npm](https://img.shields.io/npm/dt/nuxt-linkedin-pixel-module.svg?style=flat-square)](https://npmjs.com/package/nuxt-linkedin-pixel-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)
[![CircleCI](https://img.shields.io/circleci/project/github/mark-beeby/nuxt-linkedin-pixel-module/master.svg?style=flat-square)](https://circleci.com/gh/mark-beeby/nuxt-linkedin-pixel-module/tree/master)

> A NuxtJS module thats injects LinkedIn Pixel code

Inspired by [https://github.com/WilliamDASILVA/nuxt-linkedin-pixel-module](https://github.com/WilliamDASILVA/nuxt-linkedin-pixel-module)


## Table of Contents ##

* [Requirements](#requirements)
* [Install](#install)
* [Getting Started](#getting-started)
* [License](#license)

## Requirements

* npm or yarn
* NuxtJS
* NodeJS

## Install

```bash
$ npm install --save nuxt-linkedin-pixel-module
// or
$ yarn add nuxt-linkedin-pixel-module
```

## Getting Started

Add `nuxt-linkedin-pixel-module` to `modules` section of `nuxt.config.js`.
```js
{
  modules: [
    // Simple usage
    'nuxt-linkedin-pixel-module',

    // With options
    ['nuxt-linkedin-pixel-module', {
      /* module options */
      partnerId: 'LINKEDIN_PIXEL_ID',
      disabled: false
    }],
 ]
}
```
or even
```js
{
  modules: [
    'nuxt-linkedin-pixel-module',
  ],
  linkedin: {
    /* module options */
    partnerId: 'LINKEDIN_PIXEL_ID',
    disabled: false
  },
}
```

## Disabling the pixel (for GDPR)

If you'd like to install the pixel disabled, and enable it later after the user has consented to its use, you can do so by setting `disabled: true` in the pixel configuration:

```js
{
  modules: [
    'nuxt-linkedin-pixel-module',
  ],
  linkedin: {
    ...
    disabled: true
  },
}
```

Now, in your component, you can call the following in order to start the pixel and track the current page.

```js
this.$li.enable()
```

## Module options

List of possible options in the module:

| Option   | Default  | Required | Description                                                                               |
|----------|----------|----------|-------------------------------------------------------------------------------------------|
| partnerId  | null     | true     | The unique insight tag ID (usually 6 digits) identifier provided by LinkedIn (can be located within the ```Set up your insight Tag``` dialog displayed as: ```__linkedin_partner_id = "xxxxxx";```.                                         |
| disabled | false    | false    | Disable the Pixel by default when initialized. Can be enabled later through `$li.enable()`.

## LinkedIn pixel instance

The tracking pixel instance is available on all vue component instances as $li. It has the following methods:

| Method            | Purpose                                                                                                  | Equivalent to                  |
|-------------------|----------------------------------------------------------------------------------------------------------|--------------------------------|
| enable()          | If you had previously set `disabled: true` in config, enables the pixel and tracks the current page view | $li.init()        |

## License

[MIT License](./LICENSE)
