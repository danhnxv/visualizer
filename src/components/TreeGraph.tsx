

import { memo } from 'react';
import { Graph } from 'react-d3-graph';


const Tree = () => {
    const data = {
        links: [
            {
                source: 'OIG 5533',
                target: '2019-05-07',
                label: 'INVOLVED IN',
            },
            { source: 'NLY 6', target: '2019-05-07', label: 'INVOLVED IN' },
            { source: 'Lucas. Krystal', target: '2019-05-07', label: 'DROVE' },
            {
                source: 'Lucas. Krystal',
                target: 'FG04 DAM',
                label: 'WITNESSED',
            },
            { source: 'Porter Krisana', target: 'OIG 5533', label: 'DROVE' },
            { source: 'Emily', target: 'NLY 6', label: 'DROVE' },
            {
                source: 'Lucas. Krystal',
                target: '75-79 York Street',
                label: 'LIVES AT',
            },
            { source: 'Emily', target: '2 King James Ct', label: 'LIVES AT' },
            { source: 'Doctor', target: 'Porter Krisana', label: 'TREATED' },
            { source: 'Porter Krisana', target: '7 London', label: 'TREATED' },
            { source: 'Doctor', target: 'Stewart, Walter', label: 'TREATED' },
            {
                source: 'FG04 DAM',
                target: '2019-03-16',
                label: 'INVOLVED IN',
            },
            {
                source: 'LE54 HYU',
                target: '2019-09-27',
                label: 'INVOLVED IN',
                color: 'red',
            },
            {
                source: 'DA53 RMX',
                target: '2019-03-16',
                label: 'INVOLVED IN',
            },
            {
                source: 'DA53 RMX',
                target: '2019-09-27',
                label: 'INVOLVED IN',
                color: 'red',
            },
            {
                source: 'Page, Everett',
                target: '2019-09-27',
                label: 'WITNESSED',
                color: 'red',
            },
            { source: 'Stewart, Walter', target: 'DA53 RMX', label: 'DROVE' },
            { source: 'Porter Stephen', target: 'LE54 HYU', label: 'DROVE' },

            { source: 'Rodriquez, Julia', target: 'DA53 RMX', label: 'DROVE' },
            {
                source: 'Rodriquez, Julia',
                target: '5 Mandela',
                label: 'LIVES AT',
            },
            {
                source: 'Stewart, Walter',
                target: '3 King Head',
                label: 'LIVES AT',
            },
            { source: 'Porter Stephen', target: '7 London', label: 'LIVES AT' },
            {
                source: 'Page, Everett',
                target: '3 King Head',
                label: 'LIVES AT',
                color: 'red',
                highlightColor: 'red',
            },
        ],
        nodes: [
            {
                id: '2019-05-07',
                svg: '/assets/svg/document.svg',
                size: 500,
                x: 400,
                y: 50,
            },
            {
                id: '2019-03-16',
                svg: '/assets/svg/document.svg',
                size: 500,
                x: 900,
                y: 50,
            },
            {
                id: '2019-09-27',
                svg: '/assets/svg/document-red.svg',
                size: 500,
                x: 1400,
                y: 50,
            },
            {
                id: 'OIG 5533',
                svg: '/assets/svg/car.svg',
                size: 600,
                x: 200,
                y: 250,
            },
            {
                id: 'NLY 6',
                svg: '/assets/svg/car.svg',
                size: 600,
                x: 400,
                y: 250,
            },
            {
                id: 'Lucas. Krystal',
                svg: '/assets/svg/user.svg',
                size: 500,
                x: 600,
                y: 250,
            },
            {
                id: 'Page, Everett',
                svg: '/assets/svg/user.svg',
                size: 500,
                x: 1600,
                y: 250,
            },
            {
                id: 'FG04 DAM',
                svg: '/assets/svg/car.svg',
                size: 600,
                x: 750,
                y: 250,
            },
            {
                id: 'LE54 HYU',
                svg: '/assets/svg/car.svg',
                size: 600,
                x: 1200,
                y: 250,
            },
            {
                id: 'DA53 RMX',
                svg: '/assets/svg/car.svg',
                size: 600,
                x: 1400,
                y: 250,
            },
            {
                id: 'Porter Krisana',
                svg: '/assets/svg/user.svg',
                size: 500,
                x: 200,
                y: 450,
            },
            {
                id: 'Porter Stephen',
                svg: '/assets/svg/user.svg',
                size: 500,
                x: 1200,
                y: 450,
            },
            {
                id: 'Emily',
                svg: '/assets/svg/user.svg',
                size: 500,
                x: 400,
                y: 450,
            },
            {
                id: '75-79 York Street',
                svg: '/assets/svg/home.svg',
                size: 600,
                x: 600,
                y: 450,
            },
            {
                id: 'Rodriquez, Julia',
                svg: '/assets/svg/user.svg',
                size: 500,
                x: 1400,
                y: 450,
            },
            {
                id: '3 King Head',
                svg: '/assets/svg/home.svg',
                size: 600,
                x: 1600,
                y: 450,
            },
            {
                id: '2 King James Ct',
                svg: '/assets/svg/home.svg',
                size: 600,
                x: 400,
                y: 700,
            },
            {
                id: 'Doctor',
                svg: '/assets/svg/doctor.svg',
                size: 600,
                x: 800,
                y: 700,
            },
            {
                id: '7 London',
                svg: '/assets/svg/home.svg',
                size: 600,
                x: 1200,
                y: 700,
            },
            {
                id: '5 Mandela',
                svg: '/assets/svg/home.svg',
                size: 600,
                x: 1400,
                y: 700,
            },
            {
                id: 'Stewart, Walter',
                svg: '/assets/svg/user.svg',
                size: 400,
                x: 1000,
                y: 450,
            },
        ],
    };

    // the graph configuration, just override the ones you need
    const myConfig: any = {
        automaticRearrangeAfterDropNode: true,
        collapsible: true,
        directed: true,
        focusAnimationDuration: 0.75,
        focusZoom: 1,
        freezeAllDragEvents: false,
        height: window.innerHeight,
        highlightDegree: 2,
        highlightOpacity: 0.2,
        linkHighlightBehavior: true,
        maxZoom: 12,
        minZoom: 0.05,
        initialZoom: null,
        nodeHighlightBehavior: false,
        panAndZoom: false,
        staticGraph: true,
        staticGraphWithDragAndDrop: false,
        width: window.innerWidth,
        node: {
            color: '#d3d3d3',
            fontColor: 'black',
            fontSize: 16,
            fontWeight: 'normal',
            highlightColor: 'red',
            highlightFontSize: 14,
            highlightFontWeight: 'bold',
            highlightStrokeColor: 'red',
            highlightStrokeWidth: 1.5,
            mouseCursor: 'crosshair',
            opacity: 1,
            renderLabel: true,
            labelProperty: 'label',
            size: 400,
            strokeColor: 'none',
            strokeWidth: 2,
            svg: '',
            symbolType: 'circle',
            labelPosition: 'bottom',
        },
        link: {
            renderLabel: true,
            strokeWidth: 2.5,
            highlightColor: 'red',
        },
    };

    const onClickNode = function (nodeId: string) {
        window.alert(`Clicked node ${nodeId}`);
    };

    const onClickLink = function (source: string, target: string) {
        window.alert(`Clicked link between ${source} and ${target}`);
    };

    return (
        <div className="flex justify-center ">
            <div className="w-full h-screen">
                <Graph
                    id="graph-id" // id is mandatory
                    data={data}
                    config={myConfig}
                    onClickNode={onClickNode}
                    onClickLink={onClickLink}
                />
            </div>
        </div>
    );
};

export default memo(Tree);
