import { useParams } from 'react-router-dom';
import './Tool.module.scss';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../store/store';
import { fetchTool } from '../../../features/tool/toolSlice';

interface ToolProps {
    title?: string;
}

const Tool: React.FC<ToolProps> = ({ }) => {
    const { toolId } = useParams<{ toolId: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const { tool, loading, error } = useSelector((state: RootState) => state.tool);

    useEffect(() => {
        if (toolId) {
            dispatch(fetchTool(toolId));
        }
    }, [dispatch, toolId]);

    if (loading) {
        return <div className="tool-container">Loading...</div>;
    }

    if (error) {
        return <div className="tool-container">Error: {error}</div>;
    }

    if (!tool) {
        return <div className="tool-container">No tool found.</div>;
    }

    return (
        <div className="tool-container">
            <h1>{tool.title}</h1>
            <img src={tool.imageURL} alt={tool.title} />
            <div>{tool.description}</div>
        </div>
    );
};

export default Tool;
