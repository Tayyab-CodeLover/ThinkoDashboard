import React from 'react'

const Drawer = () => {
    return (
        <>
            <Drawer
                anchor="right"
                open={open}
                onClose={onClose}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 400,
                        backgroundColor: "#1e293b",
                        borderLeft: "1px solid #334155",
                    },
                }}
            >
                <Box sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                        <Typography variant="h5">🔥</Typography>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            Task Heading
                        </Typography>
                    </Box>

                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
                        Properties
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                                Progress
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#f59e0b" }} />
                                <Typography variant="body2">Ongoing</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                                Task owner
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Avatar sx={{ width: 20, height: 20 }} />
                                <Typography variant="body2">Priya</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                                Urgency
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#ef4444" }}>
                                Critical
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                                Department
                            </Typography>
                            <Typography variant="body2">Engineering</Typography>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                                Date added
                            </Typography>
                            <Typography variant="body2">March 15, 2025</Typography>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                                Deadline
                            </Typography>
                            <Typography variant="body2">May 15, 2025</Typography>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                                Click Start
                            </Typography>
                            <Chip label="Star Timer" size="small" sx={{ backgroundColor: "#f59e0b", color: "white" }} />
                        </Box>
                    </Box>

                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
                        Attachments
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                mb: 2,
                                p: 1,
                                backgroundColor: "#334155",
                                borderRadius: 1,
                            }}
                        >
                            <AttachFileIcon />
                            <Box>
                                <Typography variant="body2">Client_Proposal.xls</Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Today • 4 MB
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                mb: 2,
                                p: 1,
                                backgroundColor: "#334155",
                                borderRadius: 1,
                            }}
                        >
                            <AttachFileIcon />
                            <Box>
                                <Typography variant="body2">PRD.docx</Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Yesterday • Google Docs
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
                        Discussion
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                            <Avatar sx={{ width: 24, height: 24 }} />
                            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                David Lee
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Have you considered AI-driven task prioritization?
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                            <Avatar sx={{ width: 24, height: 24 }} />
                            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                Priya Sharma
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                            Don't forget to add accessibility features in the design phase.
                        </Typography>
                    </Box>

                    <TextField
                        fullWidth
                        placeholder="Write a comment"
                        variant="outlined"
                        size="small"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "#334155",
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <IconButton size="small">
                                    <SendIcon />
                                </IconButton>
                            ),
                        }}
                    />
                </Box>
            </Drawer>
        </>
    )
}

export default Drawer
