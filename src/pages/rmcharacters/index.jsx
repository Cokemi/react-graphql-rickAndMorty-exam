import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

//import {characters as characters_dummy_data} from '../../dummydata/character';

import { useQuery } from "@apollo/client";
import { FETCH_RICK_AND_MORTY_CHARACTERS } from "../../api/graphql/rickAndMorty";

function RMCharacters() {
  const [rowInfo, setRowInfo] = React.useState({ totalCountOfRows: 0, rows: [] });
  
  const [page, setPage] = React.useState(0);

  const { loading, error, data } = useQuery(FETCH_RICK_AND_MORTY_CHARACTERS, {
    variables: {
      page: page + 1,
    },
  });

  React.useEffect( () => {
    if (data){
      setRowInfo({ totalCountOfRows: data.characters.info.count, rows: data.characters.results});
    }
  }, [data]);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div style={{margin: "100px"} }>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" size = "small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Species</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Episodes</TableCell>
            {/*<TableCell>Picture</TableCell>*/}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowInfo.rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.species}</TableCell>
              <TableCell>{row.location.name}</TableCell>
              <TableCell>{row.episode.length}</TableCell>
              {/*<TableCell>
                <img src= {row.image} width="50px" height="50px"></img>
              </TableCell>*/}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
          rowsPerPageOptions={[20]}
          component="div"
          count={rowInfo.totalCountOfRows}
          rowsPerPage={20}
          page={page}
          onPageChange={handleChangePage}
        />
    </div>
  );
}

export default RMCharacters;
