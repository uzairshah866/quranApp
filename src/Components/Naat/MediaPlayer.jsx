import Switch from 'rc-switch'
import React, { Component } from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import Locale from 'react-jinke-music-player/lib/config/locale'
import PLAY_MODE from 'react-jinke-music-player/lib/config/playMode'
import 'react-jinke-music-player/lib/styles/index.less'
import 'react-jinke-music-player/assets/index.css'
import { createRandomNum } from 'react-jinke-music-player/lib/utils'
import {app} from '../../base'


const audioList1=[{
  name: 'Despacito',
  singer: 'Luis Fonsi',
  cover:
    'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
  musicSrc:
    'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
  // support async fetch music src. eg.
  // musicSrc: async () => {
  //   return await fetch('/api')
  // },
},
{
  name: 'Dorost Nemisham',
  singer: 'Sirvan Khosravi',
  cover:
    'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
  musicSrc:
    'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
},]

    const options = {
        defaultPlayIndex: '0',
        theme: 'light',
        bounds: 'body',
        quietUpdate: false,
        clearPriorAudioLists: false,
        autoPlayInitLoadPlayList: false,
        preload: false,
        remove: true,
        mode: 'full',
        autoPlay: true,
        toggleMode: true,
        showMiniModeCover: false,
        showMiniProcessBar: true,
        drag: true,
        seeked: true,
        showMediaSession: true,
        showProgressLoadBar: true,
        showPlay: true,
        showReload: true,
        showDownload: true,
        showPlayMode: true,
        defaultVolume: 1,
        locale: Locale.en_US,
        responsive: false,
        onAudioDownload(audioInfo) {
            console.log('audio download', audioInfo)
          },
          onAudioPlay(audioInfo) {
            console.log('audio playing', audioInfo)
          },
        
          // audio pause handle
          onAudioPause(audioInfo) {
            console.log('audio pause', audioInfo)
          },
        
          // When the user has moved/jumped to a new location in audio
          onAudioSeeked(audioInfo) {
            console.log('audio seeked', audioInfo)
          },
        
          // When the volume has changed  min = 0.0  max = 1.0
          onAudioVolumeChange(currentVolume) {
            console.log('audio volume change', currentVolume)
          },
        
          // The single song is ended handle
          onAudioEnded(currentPlayId, audioLists, audioInfo) {
            console.log('audio ended', currentPlayId, audioLists, audioInfo)
          },
        
          // audio load abort
          onAudioAbort(currentPlayId, audioLists, audioInfo) {
            console.log('audio abort', currentPlayId, audioLists, audioInfo)
          },
        
          // audio play progress handle
          // eslint-disable-next-line no-unused-vars
          onAudioProgress(audioInfo) {
            // console.log('audio progress', audioInfo)
          },
        
          // audio reload handle
          onAudioReload(audioInfo) {
            console.log('audio reload:', audioInfo)
          },
        
          // audio load failed error handle
          onAudioError(errMsg, currentPlayId, audioLists, audioInfo) {
            console.error('audio error', errMsg, currentPlayId, audioLists, audioInfo)
          },
        
          // theme change handle
          // onThemeChange(theme) {
          //   console.log('theme change:', theme)
          // },
        
          onAudioListsChange(currentPlayId, audioLists, audioInfo) {
            console.log('audio lists change:', currentPlayId, audioLists, audioInfo)
          },
        
          onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
            console.log(
              'audio play track change:',
              currentPlayId,
              audioLists,
              audioInfo,
            )
          },
        
          // onPlayModeChange(playMode) {
          //   console.log('play mode change:', playMode)
          // },
        
          // onModeChange(mode) {
          //   console.log('mode change:', mode)
          // },
        
          onAudioListsPanelChange(panelVisible) {
            console.log('audio lists panel visible:', panelVisible)
          },
        
          onAudioListsDragEnd(fromIndex, endIndex) {
            console.log('audio lists drag end:', fromIndex, endIndex)
          },
          getContainer() {
            return document.body
          }, getAudioInstance(audio) {
            console.log('audio instance', audio)
          },
          

    }


   



class MediaPlayer extends Component {
    state = { 
        audioList:[],
        unmount:false,
        params:{
            ...options,
            getAudioInstance: (audio) => {
                this.audio = audio
              },
            },
        
     }

     async componentDidMount(){
       const d=this.props.data[0].title
       
       const audioList=[]
       const title=d
       const artist=this.props.data[0].artist
       const icon=this.props.data[0].icon
         const storage =app.storage()
         
       await storage.ref(`naats/${d}.mp3`).getDownloadURL()
         .then((url) => {
           
           audioList.push({
             name:title,
             singer:artist,
             cover:icon,
             musicSrc:url
           })
           
          })
          this.setState({audioList:audioList})

         


      }
  
    
     onAddAudio = () => {
        this.updateParams({
          clearPriorAudioLists: false,
          audioLists: [
            ...this.state.params.audioLists,
          ],
        })
        
      }
      extendsContent = () => {
        this.updateParams({
          extendsContent: (
            <button
              type="button"
              onClick={() => {
                // eslint-disable-next-line no-alert
                alert("I'm extends content")
              }}
            >
              button
            </button>
          ),
        })
      }
      onChangeToFirstAudioList = () => {
        this.updateParams({
          clearPriorAudioLists: true,
          quietUpdate: false,
          audioLists: audioList1[0],
        })
      }
      onAutoPlayMode = () => {
        this.updateParams({
          autoPlay: !this.state.params.autoPlay,
        })
      }
    
      onAutoPlayInitLoadPlayList = () => {
        this.updateParams({
          autoPlayInitLoadPlayList: !this.state.params.autoPlayInitLoadPlayList,
        })
      }
    
      onClearPriorAudioLists = () => {
        this.updateParams({
          clearPriorAudioLists: !this.state.params.clearPriorAudioLists,
        })
      }
      
      onDrag = () => {
        this.onChangeKey('drag')
      }
    
      onToggleMode = () => {
        this.onChangeKey('toggleMode')
      }
    
      onSeeked = () => {
        this.onChangeKey('seeked')
      }

      showMiniProcessBar = () => {
        this.onChangeKey('showMiniProcessBar')
      }
    
      showMiniModeCover = () => {
        this.onChangeKey('showMiniModeCover')
      }
    
      playModeShowTime = () => {
        this.updateParams({
          playModeShowTime: createRandomNum(200, 2000),
        })
      }
    
      changePlayIndex = () => {
        this.updateParams({
          playIndex: createRandomNum(0, this.state.params.audioLists.length - 1),
        })
      }
    
      updateParams = (params) => {
        const data = {
          ...this.state.params,
          ...params,
        }
        this.setState({
          params: data,
        })
      }
    
      unmountPlayer = () => {
        this.setState({ unmount: true })
      }
    
      onPlayModeChange = (e) => {
        this.updateParams({ playMode: e.target.value })
      }
    
      renderCustomAudioTitle = () => {
        this.updateParams({
          renderAudioTitle: (audioInfo, isMobile) => {
            console.log('audioInfo: ', audioInfo, isMobile)
            return (
              <>
                <a href="#">{audioInfo.name}</a>
                <span className="tag">Hot</span>
              </>
            )
          },
        })
      }

    render() { 
        
        const { params, unmount } = this.state
    return (
      <>
      
        {unmount ? null : (
          <ReactJkMusicPlayer
            {...params}
            audioLists={this.state.audioList}
            onThemeChange={(theme) => {
              console.log('onThemeChange: ', theme)
              this.updateParams({ theme })
            }}
            onModeChange={(mode) => {
              console.log('onModeChange: ', mode)
              this.updateParams({ mode })
            }}
            onPlayModeChange={(playMode) => {
              console.log('onPlayModeChange: ', playMode)
              this.updateParams({ playMode })
            }}
            onPlayIndexChange={(playIndex) => {
              console.log('onPlayIndexChange: ', playIndex)
              this.updateParams({ playIndex })
            }}
          />
        )}
      </>
    )}
}
 
export default MediaPlayer;