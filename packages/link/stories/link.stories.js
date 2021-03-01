import LgLink from '../src/link.vue'

export default {
  title: 'LgLink',
  component: LgLink
}

export const Link = _ => ({
  components: { LgLink },
  template: `
    <div>
      <lg-links :disabled="true" href="http://www.baidu.com">baidu</lg-links>
    </div>
  `
})