import React from 'react';
import Quagga from 'quagga';
import PropTypes from 'prop-types';

class ScannerSettings extends React.Component {

    render() {
        return (
            <div id="interactive" className="viewport" />
        );
    }



    componentDidMount() {
        console.log(navigator.mediaDevices);




        //testing
        var constraints = { audio: true, video: { width: 640, height: 320 } };

        navigator.mediaDevices.getUserMedia(constraints)
            .then(function (mediaStream) {
                var video = document.querySelector('video');
                video.srcObject = mediaStream;
                video.onloadedmetadata = function (e) {
                    video.play();
                };
            })
            .catch(function (err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.










        Quagga.init({
            inputStream: {
                type: "LiveStream",
                constraints: {
                    width: 640,
                    height: 480,
                    facingMode: "environment" // or user
                }
            },
            locator: {
                patchSize: "medium",
                halfSample: true
            },
            numOfWorkers: 2,
            decoder: {
                readers: [
                    'upc_reader',
                    'upc_e_reader'
                ]

            },
            locate: true
        }, function (err) {
            if (err) {
                alert("Camera not found")
                return console.log(err);
            }
            Quagga.start();
        });
        Quagga.onDetected(this._onDetected);
    }

    componentWillUnmount() {
        Quagga.offDetected(this._onDetected);
    }

    _onDetected = (result) => {
        this.props.onDetected(result);
    }
};

ScannerSettings.propTypes = {
    onDetected: PropTypes.func.isRequired
}

export default ScannerSettings;