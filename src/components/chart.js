import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklilnesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data){
    return _.round(_.sum(data/data.lenth))
}

export default (props) => {
    return(
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklilnesLine color={props.color} />
                <SparklinesReferenceLine type='avg'/>
            </Sparklines>
            <div>{average(props.data)}</div>
        </div>
    )
}