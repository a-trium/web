var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">
        
      </a>
    </div>
  </div>
</nav>
    );
  }
});

React.render(
  <Header />,
  document.getElementById('content')
)
