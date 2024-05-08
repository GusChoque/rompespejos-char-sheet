import PropTypes from 'prop-types';

function LinedTitle({text, Tag}) {
  return (
    <Tag
      className={`grid grid-cols-[1fr,auto,1fr] items-center text-center gap-4
            before:content-[''] before:h-1 before:bg-white before:block
            after:content-[''] after:h-1 after:bg-white after:block
            text-3xl font-bold py-2`}
    >
      {text}
    </Tag>
  );
}

LinedTitle.propTypes = {
    text: PropTypes.string.isRequired,
    Tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  };

export default LinedTitle;
