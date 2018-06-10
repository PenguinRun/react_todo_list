import React, { Component } from 'react';

class Speech extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td className="speech-left">
                        <label><input className="checkBox" type="checkbox" />{' '}<span>Check me out</span></label>
                    </td>
                    <td className="speech-right">
                        <i className="far fa-star"></i>
                    </td>
                    <td className="speech-right">
                        <i className="far fa-edit"></i>
                    </td>
                </tr>
                <tr>
                    <td className="td-icons">
                        <ul className="speech-ul">
                            <li className="speech-li"><i className="far fa-calendar-alt"> 5/31</i></li>
                            <li className="speech-li"><i className="far fa-file"></i></li>
                            <li className="speech-li"><i className="far fa-comment"></i></li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        )
    }
}

export default Speech;