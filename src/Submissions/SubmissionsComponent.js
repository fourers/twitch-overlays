import { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import data from './data.json'

export default function SubmissionsComponent({ index }) {
    const [wrapText, setWrapText] = useState(false);

    useEffect(() => setWrapText(false), [index]);

    const toggleWrapText = () => setWrapText((previousValue => !previousValue));

    const whitespaceProperty = wrapText ? "normal" : "nowrap";

    return (
        <TableContainer component={Paper} sx={{ maxHeight: "50vh", mt: 1, overflowX: "scroll" }}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell
                            onClick={toggleWrapText}
                            sx={{ borderBottom: 0, userSelect: "none", whiteSpace: whitespaceProperty }}
                        >
                            {data[index]}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}