import React from "react";

export default class MultiForm extends React.Component{
    constructor (props) {
        super(props)
        // フォームの初期設定
        this.state = {
            name:'クジラ',
            age:22,
            hobby:'読書'
        }
    }

    // 値が変更されたとき
    doChange (e) {
        const userValue = e.target.value
        const key = e.target.name
        this.setState({[key]:userValue})
    }

    // 送信ボタンが押されたとき
    doSubmit (e) {
        e.preventDefault()
        const j = JSON.stringify(this.state)
        alert(j)
    }

    // 画面の描画
    render () {
        // イベントをメソッドにバインド
        const doChange = (e) => this.doChange(e)
        const doSubmit = (e) => this.doSubmit(e)

        return (
            <form onSubmit={doSubmit}>
                <div>
                    <label>
                        名前：<br/>
                        <input type='text' name="name" value={this.state.name} onChange={doChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        年齢：<br/>
                        <input type='number' name="age" value={this.state.age} onChange={doChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        趣味：<br/>
                        <input type='text' name="hobby" value={this.state.hobby} onChange={doChange}/>
                    </label>
                </div>
                <input type='submit' value='送信'/>
            </form>
        )
    }
}