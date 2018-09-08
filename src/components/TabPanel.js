import React from 'react';
import { Link } from 'react-router-dom';

const refCallback = node => {
    if (window.location.pathname === node.pathname) {
        node.classList.add('active-tab')
    }
}

export default function tabPanel(props) {
    const handler = function (e) {
        const target = e.target,
            parentNode = target.parentNode;

        /** Получаем все табы и убираем активный класс */
        parentNode.childNodes.forEach(element => {
            element.classList.remove('active-tab');
        });

        /** Добавляем active-tab нужному элементу*/
        if (e.target.className.indexOf('active-tab') === -1) {
            e.target.classList.add('active-tab');
        }
    }

    return (
        <header>
            <nav className="panel">
                {
                    props.list.map((obj, i) =>
                        <Link innerRef={refCallback} to={obj.route} className="tab" key={i} onClick={handler}>{obj.name}</Link>
                    )
                }
            </nav>
        </header>
    )
}