import React from 'react';
import '../assets/css/global.module.css';

function dmSingleMessageContainer() {
  return (
    <>
      <div className='dm-plugin-thread-messages'>
        <div className='dm-plugin-thread-message-group'>
          <div className='dm-plugin-thread-message-image-container'>
            <img
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt=''
              width='36'
              height='36'
              className='dm-plugin-thread-message-image'
            />
          </div>
          <div className='dm-plugin-thread-message-body'>
            <p className='dm-plugin-thread-message-header'>
              <span className='dm-plugin-thread-message-name'>John Doe</span>
              <span className='dm-plugin-thread-message-time'>10:00AM</span>
            </p>
            <p className='dm-plugin-thread-message-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sit placerat tincidunt arcucursus. xz ,nxc,mx c,mx c,mx
              c,m x,cm x,m ,mx c,mx c,mx ,mznmxz bx,c x,nvdk nd bkcjb dkcb
              kwbfvbwifdfi bdfvdkv oudhfvhd djcb bb bkb c kjcvdh ,dxlvc hws c
              dvh ouwsdlfjhcouhasdhflchofc vjk bdhv sjhzdovuhs
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default dmSingleMessageContainer;