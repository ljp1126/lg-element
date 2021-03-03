import LgTests from '../src/tests.vue'

export default {
  title: 'LgTests',
  component: LgTests
}

export const Tests = _ => ({
  components: { LgTests },
  template: `
    <div>
      <lg-tests></lg-tests>
    </div>
  `
})