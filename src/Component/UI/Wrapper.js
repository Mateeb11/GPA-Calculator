import classes from './Wrapper.module.css'

const Wrapper = (props) => {
    return <div className={classes.input}>{props.children}</div>
}

export default Wrapper