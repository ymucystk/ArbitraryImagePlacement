import React from 'react';

export const PlacementOutput = ()=>{
    const onClick = ()=>{
        const saveData = []
        const basePathLength = window.location.href.length
        const clickAndMove = document.getElementsByClassName('click-and-move')
        for(let i=0; i<clickAndMove.length; i=i+1){
          saveData.push({
            imgpath:clickAndMove[i].src.slice(basePathLength),
            style:{
              top:clickAndMove[i].style.top,
              left:clickAndMove[i].style.left,
              width:clickAndMove[i].style.width,
              transform:clickAndMove[i].style.transform,
            }
          })
        }
        console.log({saveData})
        const resultJson = JSON.stringify(saveData);
        const downLoadLink = document.createElement("a");
        downLoadLink.download = 'arbitraryImagePlacementData-' + Date.now() + '.json';
        downLoadLink.href = URL.createObjectURL(new Blob([resultJson], {type: "text.plain"}));
        downLoadLink.dataset.downloadurl = ["text/plain", downLoadLink.download, downLoadLink.href].join(":");
        downLoadLink.click();
    }
    
    return (
        <button className='app_button' onClick={onClick}><span>save</span></button>
    );
}
