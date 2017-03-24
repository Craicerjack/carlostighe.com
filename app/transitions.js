export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('marvel'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('marvel.characters'),
    this.toRoute('marvel.character'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('spotify'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('spotify.index'),
    this.toRoute('spotify.playlist'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};