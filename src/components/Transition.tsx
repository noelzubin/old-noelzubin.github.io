import * as React from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
  TransitionStatus,
} from "react-transition-group";

const timeout = 400;

const getTransitionStyles: { [key in TransitionStatus]?: React.CSSProperties } =
  {
    entering: {
      position: `absolute`,
      opacity: 0,
      transform: `translateY(20px)`,
    },
    entered: {
      transition: `all ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: `translateY(0)`,
    },
    exiting: {
      transition: `all ${timeout}ms ease-in-out`,
      transform: `translateY(0)`,
      opacity: 0,
    },
  };

interface TransitionProps {
  location: { pathname: string };
}

const Transition: React.FC<TransitionProps> = ({ children, location }) => {
  return (
    <TransitionGroup>
      <ReactTransition
        key={location.pathname}
        timeout={{
          enter: timeout,
          exit: timeout,
        }}
      >
        {(status: TransitionStatus) => (
          <div
            style={{
              ...getTransitionStyles[status],
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};
export default Transition;
