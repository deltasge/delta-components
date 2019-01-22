import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

configure({ adapter: new Adapter() })
