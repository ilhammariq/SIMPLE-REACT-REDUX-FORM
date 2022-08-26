import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist//react-bootstrap-table-all.min.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';
import swal from 'sweetalert';
import { getListMahasiswa, deleteListMahasiswa } from '../../actions/MahasiswaAction';

const mapStateToProps = (state) => ({
    getListMahasiswaData: state.MahasiswaReducer.getListMahasiswaData,
    getListMahasiswaLoading: state.MahasiswaReducer.getListMahasiswaLoading,
    getListMahasiswaError: state.MahasiswaReducer.getListMahasiswaError,
    delListMahasiswaData: state.MahasiswaReducer.delListMahasiswaData,
});

class HomeMahasiswa extends Component {
    componentDidMount() {
        const { getListMahasiswa } = this.props;
        getListMahasiswa();
    }

    componentDidUpdate(prevProps) {
        const { delListMahasiswaData, getListMahasiswa } = this.props;
        if (delListMahasiswaData && delListMahasiswaData !== prevProps.delListMahasiswaData) {
            swal({
                title: `Mahasiswa ${delListMahasiswaData.nama}`,
                text: 'Data berhasil dihapus',
                icon: 'success',
                timer: 1500,
                buttons: false,
            }).then(() => {
                getListMahasiswa();
            })
        }
    }

    deleteData = (id) => {
        const { deleteListMahasiswa } = this.props;
        swal({
            title: "Yakin Ingin Menghapus?",
            text: "Setelah dihapus, Data tidak dapat dikembalikan",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                deleteListMahasiswa(id)
            }
        })
    }

    actionFormatter = (cell, row) => {
        return (
            <div className='d-flex gap-3'>
                <Link to={`/detail/${cell}`}>
                    <Button color='info'>Detail</Button>
                </Link>
                <Link to={`/edit/${cell}`}>
                    <Button color='warning'>Update</Button>
                </Link>
                <Button color='danger' onClick={() => this.deleteData(cell)}>Delete</Button>
            </div>
        )
    }

    render() {
        const { getListMahasiswaData, getListMahasiswaLoading, getListMahasiswaError } = this.props;
        return (
            <div>
                <Link to={'/create'}>
                    <Button color='primary'>Create Mahasiswa</Button>
                </Link>
                {getListMahasiswaLoading ?
                    <div className='d-flex justify-content-center mt-5'>
                        <Spinner
                            color="primary"
                            style={{
                                height: '3rem',
                                width: '3rem'
                            }} />
                    </div>
                    :
                    getListMahasiswaError ?
                        <div className='d-flex justify-content-center mt-5 fs-4'>
                            {getListMahasiswaError}
                        </div> :
                        <BootstrapTable
                            data={getListMahasiswaData ? getListMahasiswaData : []}
                            version='4'
                            striped
                            hover
                            pagination
                            search
                            searchPlaceholder='Search...'>
                            <TableHeaderColumn isKey dataField='id' width='5%' dataAlign='center'>
                                No
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField='nama'>Nama</TableHeaderColumn>
                            <TableHeaderColumn dataField='kelas'>Kelas</TableHeaderColumn>
                            <TableHeaderColumn dataField='jurusan'>Jurusan</TableHeaderColumn>
                            <TableHeaderColumn dataField='id' width='21%' dataAlign='center' dataFormat={this.actionFormatter}>
                                Action
                            </TableHeaderColumn>
                        </BootstrapTable>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, { getListMahasiswa, deleteListMahasiswa })(HomeMahasiswa);