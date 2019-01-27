import React, { Component } from "react";
import styled from "styled-components";
import { Transition } from "react-spring";
import { Portal, absolute } from "Utilities";
import Icon from "./Icon";
import { Card } from "./Cards";

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        <Transition
          items={on}
          from={{ opacity: 0, bgOpacity: 0, y: -50 }}
          enter={{ opacity: 1, bgOpacity: 0.5, y: 0 }}
          leave={{ opacity: 0, bgOpacity: 0, y: 50 }}
        >
          <ModalWrapper>
            <>
              <ModalCard
                style={{
                  transform: `translate3d(0, ${50}px, 0)`
                  // ...style
                }}
              >
                <CloseButton onClick={toggle}>
                  <Icon name="close" />
                </CloseButton>
                <div>{children}</div>
              </ModalCard>
              <Background style={{ opacity: 0.5 }} onClick={toggle} />
            </>
          </ModalWrapper>
          {/* {on &&
            (style => (
              <ModalWrapper>
                <>
                  <ModalCard
                    style={{
                      transform: `translate3d(0, ${style.y}px, 0)`,
                      ...style
                    }}
                  >
                    <CloseButton onClick={toggle}>
                      <Icon name="close" />
                    </CloseButton>
                    <div>{children}</div>
                  </ModalCard>
                  <Background
                    style={{ opacity: style.bgOpacity }}
                    onClick={toggle}
                  />
                </>
              </ModalWrapper>
            ))} */}
        </Transition>
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled(Card)`
  position: relative;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 100px;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  padding: 10px;
  ${absolute({
    y: "top",
    x: "right"
  })};
`;

const Background = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;
