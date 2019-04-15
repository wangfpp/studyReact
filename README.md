## 个人学习项目
- React组件传值
    - props state
    - 子组件的数据验证和默认数据
        ``` javascript  
        import PropTypes from 'prop-types' 
        static defaultProps = {
            name: 'ddkk1212'
        }
        static propTypes = {
            name: PropTypes.string.isRequired,
            height: PropTypes.number.isRequired
        }
        ```
    - 子组件给父组件传值 props接受父组件数据 父组件的方法接受返回数据
        ```javascript
        // 子组件 
        this.props.change(this.state.date);
        // 父组件
        changeDate(date) {
            // console.log(date);
            this.setState({
                date: date
            })
        }
        <Clock date={this.state.date} change={this.changeDate.bind(this)}
        ```
- 生命周期
    - componentWillUnmount
    - componentDidMount 
    - componentWillUpdate
    - ![图解](https://user-gold-cdn.xitu.io/2017/11/11/88e11709488aeea3f9c6595ee4083bf3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
- 渲染
    - React的页面渲染全部为js写法 没有什么特殊的API(除了渲染带标签的HTML) 
    - 绑定key={index} 
    - 多个className 
        - className={`node ${item.name === this.state.currUsr ? 'curr': ''}`}
        - classnames [classnames github](https://github.com/JedWatson/classnames)
    - style style={{margin:'10px 0', paddingTop: '10px'}}
    -
    ```javascript
        Array.map(_ => {
        // TODO...
    })
        ```
- 路由 Route
    - 具体代码 文档地址 [Route Config](https://reacttraining.com/react-router/web/example/route-config)
    ``` javascript
        import { BrowserRouter as Router, Route} from 'react-router-dom';

        import { Link } from 'react-router-dom';
         {this.state.navList.map((item, index) => {
            return <Link to={item.to}>{item.name}</Link>
        })}
        <Nav></Nav>

        <Route exact path="/" component={Home}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/usermanage" component={UserManage}></Route>
        <Route path="/test" component={Test}></Route>
    ```
- Redux Fuck
    - Actions
        - type 类型
    - Reducer
        - 改变store时出发的type的具体事件
    - connect 链接组建 state可以直接获取Store的数据
    - Provider 提供Store给当前应用 
    - 持久化缓存 redux-persist[NPM](https://www.npmjs.com/package/redux-persist)

## React学习告一段落 

:smirk: :disappointed: :pensive: :unamused: :expressionless: :confused: