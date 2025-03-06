import styles from './ToolTable.module.scss';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import ToolCard from '../../objects/toolCard/ToolCard';
import ToolFilter from '../../objects/toolFilter/ToolFilter';

interface ToolTableProps {
    title?: string;
}

const ToolTable: React.FC<ToolTableProps> = ({ }) => {
    const tools = useSelector((state: RootState) => state.tools);
    const [useMap, setUseMap] = useState(false)

    return (
        <div className={styles['tool-table-container']}>
            <div className={styles["tool-table"]}>
                <div className={styles['table-header-container']}>
                    <div>
                        <button className={useMap ? styles.unfocused : styles.focus} onClick={() => setUseMap(false)} >Grid</button>
                        <button className={useMap ? styles.focus : styles.unfocused} onClick={() => setUseMap(true)} >Map</button>
                    </div>
                    <div>
                        <select name="" id="">
                            <option value=""> Elektrisk</option>
                            <option value=""> Infraröd</option>
                            <option value=""> Ångbastu</option>
                            <option value=""> Torrbastu</option>
                            <option value=""> Vedeldad</option>
                            <option value=""> Isvak</option>
                            <option value=""> Vid Sjön</option>
                            <option value=""> Stora sällskap</option>
                            <option value=""> Liten</option>
                        </select>
                    </div>
                    <ToolFilter></ToolFilter>
                </div>
                <div className={styles["table-content-container"]}>

                    {useMap ?
                        <div>
                            Map not yet supported
                        </div>
                        :
                        <div className={styles['tool-grid']}>
                            {tools.length > 0 ? (
                                tools.map((tool) => (
                                    <ToolCard key={tool.id} tool={tool} />
                                ))
                            ) : (
                                <p>No tools available</p>
                            )}
                        </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default ToolTable;
