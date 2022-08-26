import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import FormComponent from '../../components/Mahasiswa/FormComponent'
import { connect } from 'react-redux';
import { postMahasiswa } from '../../actions/MahasiswaAction';
import swal from 'sweetalert';

const mapStateToProps = (state) => ({
    postMahasiswaData: state.MahasiswaReducer.postMahasiswaData,
});

class CreateMahasiswa extends Component {
    componentDidUpdate(prevProps) {
        const { postMahasiswaData } = this.props;
        if (postMahasiswaData && postMahasiswaData !== prevProps.postMahasiswaData) {
            swal({
                title: 'Submited!',
                text: postMahasiswaData,
                icon: 'success',
                timer: 1500,
                buttons: false,
            })
        }
    }

    handleSubmit = (data) => {
        const { postMahasiswa } = this.props;
        postMahasiswa(data);
    };

    render() {
        return (
            <div>
                <Link to={'/SIMPLE-REACT-REDUX-FORM'}>
                    <Button color='primary' className='mb-3'>Back</Button>
                </Link>
                <h3 className='mb-5'>CREATE MAHASISWA</h3>
                <FormComponent onSubmit={this.handleSubmit} create={true} />
            </div>
        )
    }
}
export default connect(mapStateToProps, { postMahasiswa })(CreateMahasiswa);
