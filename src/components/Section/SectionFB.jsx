import PropTypes from 'prop-types';
import { SectionFB, SectionTitle } from './SectionFB.styled';

export function Section({ title, children }) {
  return (
    <SectionFB>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionFB>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
