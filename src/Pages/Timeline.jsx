import React, { useState } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SignalStrength from '../Components/SignalStrength';
import StatusIndicator from '../Components/StatusIndicator';

// Sample data
const tasks = [
    {
        id: 1,
        taskNumber: "TSK-8",
        title: "Improve Navigation & Menu Organization",
        status: "Ongoing",
        priority: "Moderate",
        assignedTo: ['https://api.dicebear.com/9.x/avataaars/svg?seed=Mason'],
        subtasks: [
            {
                id: '1-1',
                title: "Update SideNav styles",
                status: "Completed",
                priority: "Minor",
                assignedTo: ['https://api.dicebear.com/9.x/avataaars/svg?seed=George']
            },
            {
                id: '1-2',
                title: "Restructure Menu logic",
                status: "Ongoing",
                priority: "Moderate",
                assignedTo: ['https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah']
            }
        ]
    },
    {
        id: 2,
        taskNumber: "TSK-22",
        title: "Speed Optimization for Home page",
        status: "In review",
        priority: "Minor",
        assignedTo: [
            "https://api.dicebear.com/9.x/avataaars/svg?seed=User4"
        ],
        subtasks: [
            {
                id: '2-1',
                title: "Reduce Load Time",
                status: "Completed",
                priority: "Minor",
                assignedTo: ['https://api.dicebear.com/9.x/avataaars/svg?seed=George']
            },
            {
                id: '2-2',
                title: "Optimize Image Compression",
                status: "Ongoing",
                priority: "Moderate",
                assignedTo: ['https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah']
            }
        ]
    },
    {
        id: 3,
        taskNumber: "TSK-23",
        title: "Introduce AI powered Task Prioritization",
        status: "Pending",
        priority: "Critical",
        assignedTo: [
            "https://api.dicebear.com/9.x/avataaars/svg?seed=User4"
        ],
        subtasks: []
    },
];

const Timeline = () => {
    const [selectedTasks, setSelectedTasks] = useState([]);
    const [selectedSubtasks, setSelectedSubtasks] = useState([]);

    const handleTaskSelect = (taskId) => {
        setSelectedTasks((prev) =>
            prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]
        );
    };

    const handleSubtaskSelect = (subtaskId) => {
        setSelectedSubtasks((prev) =>
            prev.includes(subtaskId) ? prev.filter(id => id !== subtaskId) : [...prev, subtaskId]
        );
    };

    return (

        <>
            <Typography sx={{ fontSize: '30px', marginBottom: '20px' }}>Timeline</Typography>

            <Paper elevation={0} sx={{ mt: 3, bgcolor: "transparent" }}>
                {/* Headers */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 200px 200px 200px",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                        py: 1,
                    }}
                >
                    <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: "medium" }}>Feature</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: "medium" }}>Progress</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: "medium" }}>Urgency</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: "medium" }}>Assigned to</Typography>
                </Box>

                {tasks.map((task) => (
                    <React.Fragment key={task.id}>
                        <Box
                            onClick={() => handleTaskSelect(task.id)}
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "1fr 200px 200px 200px",
                                borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                                py: 2,
                                alignItems: "center",
                                "&:hover": {
                                    bgcolor: "rgba(255, 255, 255, 0.03)",
                                },
                            }}
                        >
                            {/* Feature */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: '10px' }}>
                                <Checkbox
                                    icon={<RadioButtonUncheckedIcon />}
                                    checked={selectedTasks.includes(task.id)}
                                    checkedIcon={<CheckCircleIcon sx={{ color: 'blue' }} />}
                                    onChange={() => handleTaskSelect(task.id)}
                                    onClick={(e) => e.stopPropagation()}
                                    sx={{ mr: 1 }}
                                />
                                <Typography variant="body2" color="text.secondary">{task.taskNumber}</Typography>
                                <Typography variant="body1">{task.title}</Typography>
                                {task.comments && (
                                    <Box color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <ChatBubbleOutlineIcon sx={{ fontSize: '18px' }} />
                                        <Typography sx={{ fontSize: '15px' }}>{task.comments}</Typography>
                                    </Box>
                                )}
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <StatusIndicator status={task.status} />
                            </Box>

                            <Box>
                                <SignalStrength priority={task.priority} />
                            </Box>

                            <Box sx={{ display: 'flex', gap: 1 }}>
                                {task.assignedTo.map((assignee, index) => (
                                    <img
                                        key={index}
                                        src={assignee}
                                        alt={`avatar-${index}`}
                                        height={30}
                                        width={30}
                                        style={{
                                            backgroundColor: 'blue',
                                            borderRadius: '5px',
                                            padding: '5px',
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>

                        {/* Subtasks (if selected) */}
                        {selectedTasks.includes(task.id) && task.subtasks?.map((sub, subIndex) => (
                            <Box
                                onClick={() => handleSubtaskSelect(sub.id)}
                                key={sub.id}
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 200px 200px 200px",
                                    pl: 6,
                                    py: 1,
                                    borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
                                    alignItems: "center",
                                    bgcolor: "rgba(255,255,255,0.02)"
                                }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Checkbox
                                        icon={<RadioButtonUncheckedIcon />}
                                        checked={selectedSubtasks.includes(sub.id)}
                                        checkedIcon={<CheckCircleIcon sx={{ color: 'blue' }} />}
                                        onChange={() => handleSubtaskSelect(sub.id)}
                                        onClick={(e) => e.stopPropagation()}
                                        sx={{ mr: 1 }}
                                    />
                                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                        {task.taskNumber}.{subIndex + 1}
                                    </Typography>
                                    <Typography variant="body1">{sub.title}</Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <StatusIndicator status={sub.status} />
                                </Box>

                                <SignalStrength priority={sub.priority} />

                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    {sub.assignedTo.map((assignee, i) => (
                                        <img
                                            key={i}
                                            src={assignee}
                                            alt={`sub-avatar-${i}`}
                                            height={30}
                                            width={30}
                                            style={{
                                                backgroundColor: 'blue',
                                                borderRadius: '5px',
                                                padding: '5px',
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </React.Fragment>
                ))}
            </Paper>
        </>

    );
};

export default Timeline;
