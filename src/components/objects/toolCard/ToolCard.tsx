import React from 'react';
import styles from './ToolCard.module.scss';

import { ToolModel } from '../../../models/tool/tool'

interface ToolCardProps {
    tool: ToolModel
}

const ToolCard: React.FC<ToolCardProps> = (props) => {
    return (
        <a className={styles['card-container']} href={'/tool/' + props.tool.id}>
            <div className={styles['tool-image-container']}>
                <img className={styles['tool-image']} src={props.tool.imageURL} alt="no picture available" />
            </div>
            <div className={styles['content-container']}>
                <div className={styles['card-header']}>
                    <span className=''>
                        {props.tool.title}
                    </span>
                </div>
                {props.tool.description}
            </div>
        </a>
    );
};

export default ToolCard;