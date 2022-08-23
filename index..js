{

    document.oncontextmenu = function () { return false; }



    let ready = (callbackFunc) => {
        if (document.readyState !== 'loading') {
            callbackFunc();
        } else {
            document.addEventListener('DOMContentLoaded', callbackFunc);
        }
    }

    ready(() => {
        let video = videojs('hls_video1', {
            width: 1247, // ��
            height: 623.5, // ����
            autoplay: false, // �����Đ�
            loop: false, // ���[�v�Đ�
            controls: true, // �R���g���[������\��
            preload: 'auto', // �ǂݍ��ݐ���
        });
        video.src({
            type: 'application/dash+xml',
            src: 'stream/Bullfinch.mpd',
            keySystemOptions: [
                {
                    name: 'org.w3.clearkey',
                    options: {
                        
                    }
                }
            ]
        });

        video.on(['loadstart', 'loadedmetadata', 'loadeddata', 'play', 'playing', 'pause', 'suspend', 'seeking', 'seeked', 'waiting', 'canplay', 'canplaythrough', 'ratechange', 'ended', 'emptied', 'error', 'abort'], (e) => {
            console.log(`EVENT: ${e.type}`);
        });
        video.on('loadeddata', () => {
            console.debug('########## VideoInfo [start] ##########');
            console.debug(`>> source: ${video.currentSrc()}`);
            console.debug(`>> duration: ${video.duration()}`);
            console.debug(`>> videoSize(WxH): ${video.videoWidth()}px x ${video.videoHeight()}px`);
            console.debug(`>> readyState: ${video.readyState()}`);
            console.debug(`>> networkState: ${video.networkState()}`);
            console.debug('########## VideoInfo [end] ##########');
        });
    });
}

