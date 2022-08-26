import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Spinner } from 'reactstrap';
import { detailListMahasiswa } from '../../actions/MahasiswaAction';


const mapStateToProps = (state) => ({
    detailListMahasiswaLoading: state.MahasiswaReducer.detailListMahasiswaLoading,
    detailListMahasiswaData: state.MahasiswaReducer.detailListMahasiswaData,
    detailListMahasiswaError: state.MahasiswaReducer.detailListMahasiswaError,
});

class DetailMahasiswa extends Component {
    componentDidMount() {
        const { detailListMahasiswa } = this.props;
        detailListMahasiswa(this.props.match.params.id)
    }
    render() {
        const { detailListMahasiswaLoading, detailListMahasiswaData, detailListMahasiswaError } = this.props;
        const data = detailListMahasiswaData;
        return (
            <div>
                <Link to={'/'}>
                    <Button color='primary' className='mb-3'>Back</Button>
                </Link>
                <h3 className='mb-5'>Detail MAHASISWA</h3>
                {detailListMahasiswaLoading ?
                    <div className='d-flex justify-content-center mt-5'>
                        <Spinner
                            color="primary"
                            style={{
                                height: '3rem',
                                width: '3rem'
                            }} />
                    </div>
                    :
                    detailListMahasiswaError ?
                        <div className='d-flex justify-content-center mt-5 fs-4'>
                            {detailListMahasiswaError}
                        </div> :
                        <div className='fs-4'>
                            <FormGroup>
                                <span>Nama :</span> <span>{data.nama}</span>
                            </FormGroup>
                            <FormGroup>
                                <span>Kelas :</span> <span>{data.kelas}</span>
                            </FormGroup>
                            <FormGroup>
                                <span>Jurusan :</span> <span>{data.jurusan}</span>
                            </FormGroup>
                        </div>
                }
            </div>
        )
    }
}
export default connect(mapStateToProps, { detailListMahasiswa })(DetailMahasiswa);
