import style from './style';

export default () => (
  <div className='hello'>
    <p>Hello World</p>
    <style jsx global>{style}</style>
  </div>
)