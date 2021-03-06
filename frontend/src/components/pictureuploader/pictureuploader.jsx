import React from 'react';
import $ from 'jquery';

class PictureUploader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            picture: false,
            src: false
        }
    }

    handlePictureSelected(event) {
        let picture = event.target.files[0];
        let src = URL.createObjectURL(picture);

        this.setState({
            picture: picture,
            src: src
        });
    }

    renderPreview() {
        if (this.state.src) {
            return (
                <img src={this.state.src} alt=""/>
            );
        } else {
            return (
                <p>
                    No Preview
                </p>
            );
        }
    }

    upload() {
        let formData = new FormData();

        formData.append('file', this.state.picture);

        $.ajax({
            url: '/some/api/endpoint',
            method: 'POST',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function(response) {
                //successful response function
            }
        })
    }


    render() {
        return (
            <div>
                <h5>Picture Uploader</h5>

                <input
                    type="file"
                    onChange={this.handlePictureSelected.bind(this)}
                />
                <br />
                <div>
                    <div>
                        {this.renderPreview()}
                    </div>
                </div>
                <hr />
                <button onClick={this.upload.bind(this)}>
                    Upload
                </button>
            </div>
        );
    }
}

export default PictureUploader;